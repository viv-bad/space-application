from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
# from core.config import settings
# put in config.ini
DATABASE_URL = "postgresql://root:password@127.0.0.1:5432/paisa_space_app"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
get_db()