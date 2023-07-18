# Use an official Python runtime as the base image
FROM python:3.9

# Set environment variables for the PostgreSQL connection
ENV POSTGRES_HOST=<host>
ENV POSTGRES_PORT=5432
ENV POSTGRES_USER=<user>
ENV POSTGRES_PASSWORD=<password>
ENV POSTGRES_DB=<database>

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file to the container
COPY requirements.txt .

# Install the dependencies
RUN pip install -r requirements.txt

# Copy the backend source code to the container
COPY . .

# Expose the port on which your FastAPI application will run
EXPOSE 8000

# Run the command to start the backend application
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
