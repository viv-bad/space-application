from sqlalchemy import Column, Integer, String
from database.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)


class Astronaut(Base):
    __tablename__ = "astronauts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    # email = Column(String, nullable=False)
    mission = Column(String, nullable=False)

    class Config:
        orm_mode = True
