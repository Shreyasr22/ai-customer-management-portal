from flask import Blueprint, jsonify
from models.db import get_connection

customer_bp = Blueprint('customers', __name__)

@customer_bp.route('/customers', methods=['GET'])
def get_customers():
    conn = get_connection()
    customers = conn.execute('SELECT * FROM customers').fetchall()
    conn.close()

    return jsonify([dict(row) for row in customers])