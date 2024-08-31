from routes.comment_toxicity.logistic_reg_routes import logistic_regression_bp
from routes.comment_toxicity.xg_boost_routes import xg_boost_bp


def initialize_routes(app):
	app.register_blueprint(logistic_regression_bp)
	app.register_blueprint(xg_boost_bp)