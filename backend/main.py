from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"status": "CBX2 backend running successfully"}
