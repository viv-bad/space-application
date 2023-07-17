from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import schemas, models, crud
from database.database import get_db
from app.auth import create_access_token, verify_password


router = APIRouter()


@router.get('/')
def hello_world():
    return 'Hello world'


@router.post("/users", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)


@router.post("/login")
def login_user(login: schemas.Login, db: Session = Depends(get_db)):
    user = crud.get_user_by_email(db, email=login.email)
    if not user or not verify_password(login.password, user.password):
        raise HTTPException(
            status_code=401, detail="Invalid email or password")
    access_token = create_access_token({"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}
