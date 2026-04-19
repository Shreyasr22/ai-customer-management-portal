import sqlite3

def get_connection():
    conn = sqlite3.connect('customers.db')
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_connection()
    cur = conn.cursor()

    cur.execute('''
    CREATE TABLE IF NOT EXISTS customers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        region TEXT,
        plan TEXT,
        nps INTEGER,
        usage INTEGER
    )
    ''')

    conn.commit()
    conn.close()