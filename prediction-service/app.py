from flask import Flask


#5 Create the Flask app

def create_app():
	app = Flask(__name__)

	@app.route('/test')
	def hello():
		return 'Hello, World!'


	#4 initalize the routes here..
	from routes import initialize_routes
	initialize_routes(app)


	#3 Error handling
	@app.errorhandler(404)
	def page_not_found(e):
		return 'This page does not exist', 404

	@app.errorhandler(500)
	def server_error(e):
		return 'Server is busy, try again later', 500

	@app.errorhandler(Exception)
	def unhandled_exception(e):
		return 'An unhandled exception occurred.', 500

	return app


#5 Run the app
if __name__ == '__main__':
	app = create_app()
	app.run(host='0.0.0.0', port=5000, debug=True)