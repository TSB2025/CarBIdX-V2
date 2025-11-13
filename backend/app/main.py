
from fastapi import FastAPI
from app.api.api_router import api_router

app = FastAPI(title="CarBidX-V2")

app.include_router(api_router)

@app.get("/")
async def root():
    return {"message": "CarBidX-V2 API running"}
