from flask import Flask
from models.db import init_db
from routes.customers import customer_bp
from services.data_generator import generate_data

app = Flask(__name__)

# Initialize DB
init_db()

# Generate data (run once)
generate_data(200)

# Register routes
app.register_blueprint(customer_bp)

if __name__ == '__main__':
    app.run(debug=True)