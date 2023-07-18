# Future Work

## Assign Missions to Astronauts

### Backend

## Models

- First, I would need to create a ''Mission' model which would look something like this:

  ```
  class Mission(Base):
    __tablename__ = "missions"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)


  ```

- Then, I would look to update the Astronaut model to add a foreign key relationship between astronauts and missions:

  ```
  class Astronaut(Base):
    __tablename__ = "astronauts"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    email = Column(String, nullable=False)


  ```

- Then i would need to add a foreign key relationships between the two models:

  - ```
    assigned_astronauts = relationship("Astronaut", back_populates="mission")
    ```

  - ```
    mission_id = Column(Integer, ForeignKey("missions.id"))
    mission = relationship("Mission", back_populates="assigned_astronauts")
    ```

### Endpoints

- I then need a new endpoint `/missions/assign`, which will take in the astronaut id and the mission id as parameters.
- I'll then need to update the mission_id of the corresponding astronaut with the assigned mission_id in the params.
- Then I would modify the get_astronauts endpoint to also include mission and mission_id when retrieving astronauts data.

  ```
  @app.put("/missions/assign")
  def assign_mission(
    astronaut_id: int, mission_id: int, db: Session
  ):
     #check if astronaut and mission exists
     astronaut = crud.get_astronaut(db, astronaut_id)
     mission = crud.get_mission(db, mission_id)

     if not astronaut or not mission:
      raise exception...

    # assign the mission to the astronaut
    crud.assign_mission(db, astronaut_id, mission_id)
    return "mission assigned"
  ```

- in crud.py

```
def assign_mission(db: Session, astronaut_id : int, mission_id: int):
  astronaut = db.query(models.Astronaut).get(astronaut_id)
  mission = db.query(models.Mission).get(mission_id)

  if astronaut and mission:
    astronaut.mission_id = mission.id
    db.commit()
    db.refresh(astronaut)
```