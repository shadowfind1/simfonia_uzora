from flask import Flask, render_template, request
import os

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/order.html')
def order():
    return render_template('order.html')

@app.route('/submit', methods=['POST'])
def submit():
    name = request.form.get('name')
    phone = request.form.get('phone')
    print(f"Получена заявка от {name}, телефон: {phone}")
    return """
    <script>
        alert('Заявка успешно отправлена!');
        window.location.href = '/';
    </script>
    """

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)