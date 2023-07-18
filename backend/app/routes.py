from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app import schemas, models, crud
from database.database import get_db
from app.auth import create_access_token, verify_password
from fastapi.responses import JSONResponse

router = APIRouter()


@router.get('/')
def hello_world():
    return 'Hello world'


@router.post("/register", response_model=schemas.User)
def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db, user)


# @router.post("/users", response_model=schemas.User)
# def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
#     db_user = crud.get_user_by_email(db, email=user.email)
#     if db_user:
#         raise HTTPException(status_code=400, detail="Email already registered")
#     return crud.create_user(db=db, user=user)


@router.post("/login")
def login_user(login: schemas.Login, db: Session = Depends(get_db)):
    user = crud.get_user_by_email(db, email=login.email)
    if not user or not verify_password(login.password, user.password):
        raise HTTPException(
            status_code=401, detail="Invalid email or password")
    access_token = create_access_token({"sub": user.email})
    return {"access_token": access_token, "token_type": "bearer"}


@router.get("/astronauts", response_model=list[schemas.Astronaut])
def get_astronauts(db: Session = Depends(get_db)):
    return crud.get_astronauts(db)


@router.post("/astronauts", response_model=schemas.Astronaut)
def create_astronaut(astronaut: schemas.AstronautCreate, db: Session = Depends(get_db)):
    return crud.create_astronaut(db, astronaut)


@router.get("/astronauts/{astronaut_id}", response_model=schemas.Astronaut)
def get_astronaut(astronaut_id: int, db: Session = Depends(get_db)):
    astronaut = crud.get_astronaut(db, astronaut_id)
    if not astronaut:
        raise HTTPException(status_code=404, detail="Astronaut not found")
    return astronaut


@router.put("/astronauts/{astronaut_id}", response_model=schemas.Astronaut)
def update_astronaut(astronaut_id: int, astronaut: schemas.AstronautUpdate, db: Session = Depends(get_db)):
    return crud.update_astronaut(db, astronaut_id, astronaut)


@router.delete("/astronauts/{astronaut_id}")
def delete_astronaut(astronaut_id: int, db: Session = Depends(get_db)):
    return crud.delete_astronaut(db, astronaut_id)


# @router.post("/missions/assign")
# def assign_mission():


# @router.exception_handler(HTTPException)
# async def http_exception_handler(request, exc):
#     return JSONResponse(status_code=exc.status_code, content={"detail": exc.detail})


# @router.exception_handler(Exception)
# async def generic_exception_handler(request, exc):
#     return JSONResponse(status_code=500, content={"detail": "Internal server error"})
