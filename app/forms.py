from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, Email, Length

class ContatoForm(FlaskForm):
    nome = StringField("Nome", validators=[DataRequired(), Length(max=50)])
    email = StringField("Email", validators=[DataRequired()])
    assunto = StringField("Assunto", validators=[DataRequired(), Length(max=50)])
    mensagem = StringField("Assunto", validators=[DataRequired(), Length(max=500)])
    btnSubmit = SubmitField("Enviar")
