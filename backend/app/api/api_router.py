
from fastapi import APIRouter
from app.api.routes import auth_routes, buyer_routes, dealer_routes, request_routes, auction_routes, bid_routes, deposit_routes, payment_routes, admin_routes

api_router = APIRouter(prefix="/api/v1")

api_router.include_router(auth_routes.router, prefix="/auth", tags=["auth"])
api_router.include_router(buyer_routes.router, prefix="/buyers", tags=["buyers"])
api_router.include_router(dealer_routes.router, prefix="/dealers", tags=["dealers"])
api_router.include_router(request_routes.router, prefix="/requests", tags=["requests"])
api_router.include_router(auction_routes.router, prefix="/auctions", tags=["auctions"])
api_router.include_router(bid_routes.router, prefix="/bids", tags=["bids"])
api_router.include_router(deposit_routes.router, prefix="/deposits", tags=["deposits"])
api_router.include_router(payment_routes.router, prefix="/payments", tags=["payments"])
api_router.include_router(admin_routes.router, prefix="/admin", tags=["admin"])
