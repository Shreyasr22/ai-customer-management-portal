from faker import Faker
import random
from models.db import get_connection

fake = Faker()

def generate_data(n=200):
    conn = get_connection()
    cur = conn.cursor()

    regions = ['India', 'US', 'Europe']
    plans = ['Basic', 'Pro', 'Enterprise']

    for _ in range(n):
        name = fake.company()
        region = random.choice(regions)
        plan = random.choice(plans)
        nps = random.randint(1, 10)
        usage = random.randint(50, 500)

        cur.execute('''
            INSERT INTO customers (name, region, plan, nps, usage)
            VALUES (?, ?, ?, ?, ?)
        ''', (name, region, plan, nps, usage))

    conn.commit()
    conn.close()
    print("✅ Data Generated")