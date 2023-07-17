# from sqlalchemy.orm import Session
# from backend.app.models import User
# from backend.app.schemas import UserCreate
# from backend.database.database import get_db

# def create_user(db: Session, user: UserCreate):
#     hashed_password = hash_password(user.password)
#     db_user = User(name=user.name, email=user.email, password=hashed_password)
#     db.add(db_user)
#     db.commit()
#     db.refresh(db_user)
#     return db_user