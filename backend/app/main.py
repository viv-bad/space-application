from fastapi import FastAPI, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
# from app import models, schemas, crud, routes
from app import models, routes
from app.auth import oauth2_scheme, create_access_token, verify_password, decode_token
from database.database import get_db, engine
app = FastAPI()

models.Base.metadata.create_all(bind=engine)

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(routes.router)


# @app.post("/register", response_model=models.User)
# def register_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
#     db_user = crud.get_user_by_email(db, email=user.email)
#     if db_user:
#         raise HTTPException(status_code=400, detail="Email already registered")
#     return crud.create_user(db, user)

# @app.post("/token")
# def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
#     user = crud.get_user_by_email(db, email=form_data.username)
#     if not user or not verify_password(form_data.password, user.password):
#         raise HTTPException(status_code=401, detail="Incorrect email or password")

#     access_token = create_access_token({"sub": user.email})
#     return {"access_token": access_token, "token_type": "bearer"}

# @app.post("/astronauts", response_model=schemas.User)
# def create_astronaut(astronaut: schemas.UserCreate, db: Session = Depends(get_db)):
#     return crud.create_user(db, astronaut)

# @app.get("/astronauts", response_model=list[schemas.User])
# def get_astronauts(db: Session = Depends(get_db)):
#     return crud.get_astronauts(db)

# @app.get("/astronauts/{astronaut_id}", response_model=schemas.User)
# def get_astronaut(astronaut_id: int, db: Session = Depends(get_db)):
#     astronaut = crud.get_astronaut(db, astronaut_id)
#     if not astronaut:
#         raise HTTPException(status_code=404, detail="Astronaut not found")
#     return astronaut

# @app.put("/astronauts/{astronaut_id}", response_model=schemas.User)
# def update_astronaut(astronaut_id: int, astronaut: schemas.UserUpdate, db: Session = Depends(get_db)):
#     return crud.update_astronaut(db, astronaut_id, astronaut)

# @app.delete("/astronauts/{astronaut_id}")
# def delete_astronaut(astronaut_id: int, db: Session = Depends(get_db)):
#     return crud.delete_astronaut(db, astronaut_id)

# @app.exception_handler(HTTPException)
# async def http_exception_handler(request, exc):
#     return JSONResponse(status_code=exc.status_code, content={"detail": exc.detail})

# @app.exception_handler(Exception)
# async def generic_exception_handler(request, exc):
#     return JSONResponse(status_code=500, content={"detail": "Internal server error"})
