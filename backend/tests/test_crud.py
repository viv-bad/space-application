from app.config import settings
from app.database import Base
from sqlalchemy_utils import create_database, drop_database
from sqlalchemy.orm import sessionmaker
from sqlalchemy import create_engine
import pytest
from sqlalchemy.orm import Session

from app import crud, models, schemas
from database import get_db
from app.main import app


@pytest.fixture(scope="module")
def db() -> Session:
    # Override the database dependency to use a test database
    database = get_test_database()  # Implement a test database setup function
    yield database
    # Clean up the test database
    clean_test_database(database)  # Implement a test database cleanup function


def test_create_astronaut(db: Session):
    # Create a test astronaut object
    astronaut_data = {
        "name": "John Doe",
        "email": "johndoe@example.com",
        "mission": "Sample Mission",
    }
    astronaut = schemas.AstronautCreate(**astronaut_data)

    # Call the create_astronaut function
    created_astronaut = crud.create_astronaut(db, astronaut)

    # Verify the created astronaut's data
    assert created_astronaut.name == astronaut.name
    assert created_astronaut.email == astronaut.email
    assert created_astronaut.mission == astronaut.mission
    assert created_astronaut.id is not None


def get_test_database():
    # Create a test database
    create_database(settings.TEST_DATABASE_URL)

    # Connect to the test database
    engine = create_engine(settings.TEST_DATABASE_URL)
    TestingSessionLocal = sessionmaker(
        autocommit=False, autoflush=False, bind=engine)

    # Create all tables in the test database
    Base.metadata.create_all(bind=engine)

    # Provide a test session to use within the tests
    session = TestingSessionLocal()

    try:
        yield session
    finally:
        # Close the test session
        session.close()

        # Drop the test database
        drop_database(settings.TEST_DATABASE_URL)


def clean_test_database(database):
    # Close the database connection
    database.close()

    # Clear all data from the test database tables
    for table in reversed(Base.metadata.sorted_tables):
        database.execute(table.delete())

    # Commit the changes and close the transaction
    database.commit()
