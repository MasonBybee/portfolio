from flask import Flask, render_template, request, flash, redirect
from cards import work_cards, fun_cards

app = Flask(__name__)


app.config["SECRET_KEY"] = "its_a_secret"


@app.route("/")
def show_home():
    return render_template("index.html", work_cards=work_cards, fun_cards=fun_cards)
