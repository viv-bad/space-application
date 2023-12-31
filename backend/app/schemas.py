from pydantic import BaseModel

# Define all constraints for the User and Astronaut tables in the DB
class UserBase(BaseModel):
    name: str
    email: str

class UserCreate(UserBase):
    password: str
    confirmPassword: str

class User(UserBase):
    id: int

    class Config:
        # orm_mode = True
        from_attributes = True

class Login(BaseModel):
    email: str
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class AstronautBase(BaseModel):
    name: str
    email: str
    mission: str

class AstronautCreate(BaseModel):
    name: str
    email: str
    mission: str

    class Config:
        # orm_mode = True
        from_attributes = True

class AstronautUpdate(BaseModel):
    name: str
    email: str
    mission: str

    class Config:
        # orm_mode = True
        from_attributes = True

class Astronaut(AstronautBase):
    id: int

    class Config:
        # orm_mode = True
        from_attributes = True
        
