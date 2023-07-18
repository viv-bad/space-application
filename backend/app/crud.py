from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models import User
from app.schemas import UserCreate
from database.database import get_db
from app import models, schemas
from app.auth import hash_password


def create_user(db: Session, user: UserCreate):
    hashed_password = hash_password(user.password)
    db_user = User(name=user.name, email=user.email, password=hashed_password)
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user

def get_user_by_email(db: Session, email: str):
    return db.query(models.User).filter(models.User.email == email).first()

# def create_astronaut(db: Session, astronaut: models.Astronaut):
#     db_astronaut = models.Astronaut(**astronaut.dict())
#     db.add(db_astronaut)
#     db.commit()
#     db.refresh(db_astronaut)
#     return db_astronaut

def create_astronaut(db: Session, astronaut: schemas.AstronautCreate):
    db_astronaut = models.Astronaut(
        name=astronaut.name,
        email=astronaut.email,
        mission=astronaut.mission
    )
    db.add(db_astronaut)
    db.commit()
    db.refresh(db_astronaut)
    return db_astronaut

def get_astronauts(db: Session, skip: int = 0, limit: int = 100):
    return db.query(models.Astronaut).offset(skip).limit(limit).all()

def get_astronaut(db: Session, astronaut_id: int):
    return db.query(models.Astronaut).filter(models.Astronaut.id == astronaut_id).first()

def update_astronaut(db: Session, astronaut_id: int, astronaut: schemas.AstronautUpdate):
    db_astronaut = db.query(models.Astronaut).filter(models.Astronaut.id == astronaut_id).first()
    if not db_astronaut:
        raise HTTPException(status_code=404, detail="Astronaut not found")
    if db_astronaut:        
      for field, value in astronaut.dict().items():
          setattr(db_astronaut, field, value)
      db.commit()
      db.refresh(db_astronaut)
      return db_astronaut

def delete_astronaut(db: Session, astronaut_id: int):
    db_astronaut = get_astronaut(db, astronaut_id)
    if db_astronaut:
        db.delete(db_astronaut)
        db.commit()
    return db_astronaut



