from flask import Flask, render_template, request, flash, redirect

app = Flask(__name__)


app.config["SECRET_KEY"] = "its_a_secret"


@app.route("/")
def show_home():
    return render_template("index.html")
