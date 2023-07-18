from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from configparser import ConfigParser
# from core.config import settings
# put in config.ini


def get_database_uri():
    config = ConfigParser()
    config.read('config.ini')
    return config.get('database', 'DATABASE_URI')


DATABASE_URI = get_database_uri()
# print(DATABASE_URI)

engine = create_engine(DATABASE_URI)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


get_db()
