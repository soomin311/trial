// change 8 to the total number of questions
var total = 8
var question = new Array()
for (i = 1; i <= total + 1; i++) {
  temp = "choice" + i + " = new Array()"
  eval(temp)
}
var solution = new Array()

/* Compliments: shown randomly when the user answers correctly */
var compliments = new Array()
compliments[0] = "Excellent! You're an AI genius!"
compliments[1] = "Wow, you're really smart!"
compliments[2] = "You must have read a lot about AI!"
compliments[3] = "Right on! Great understanding."
compliments[4] = "Correct! Impressive knowledge."
compliments[5] = "Great job! You know your stuff."
compliments[6] = "Good work! Keep it up."

/* ====== AI Quiz Questions ====== */

question[1] = "What does AI stand for?"
choice1[1] = " Automated Interface"
choice1[2] = " Artificial Intelligence"
choice1[3] = " Analytical Input"
choice1[4] = " Adaptive Integration"

question[2] = "Who is often called the father of Artificial Intelligence?"
choice2[1] = " Alan Turing"
choice2[2] = " John McCarthy"
choice2[3] = " Elon Musk"
choice2[4] = " Geoffrey Hinton"

question[3] = "Which of the following is an example of Machine Learning?"
choice3[1] = " Typing on a keyboard"
choice3[2] = " Sorting papers manually"
choice3[3] = " Spam email filtering"
choice3[4] = " Printing a document"

question[4] = "What is the name of the model architecture behind ChatGPT?"
choice4[1] = " CNN (Convolutional Neural Network)"
choice4[2] = " LSTM (Long Short-Term Memory)"
choice4[3] = " Transformer"
choice4[4] = " GAN (Generative Adversarial Network)"

question[5] = "Which of the following best describes Deep Learning?"
choice5[1] = " Learning that happens during sleep"
choice5[2] = " Machine learning using neural networks with many layers"
choice5[3] = " Studying complex data manually"
choice5[4] = " Learning by asking questions"

question[6] = "Which company developed the AI system AlphaGo?"
choice6[1] = " OpenAI"
choice6[2] = " DeepMind"
choice6[3] = " IBM"
choice6[4] = " Google Brain"

question[7] = "What is a potential ethical concern with AI systems?"
choice7[1] = " AI using too much storage space"
choice7[2] = " AI replacing or biasing human decision-making"
choice7[3] = " AI running too slowly"
choice7[4] = " AI having low resolution graphics"

question[8] = "Which of these is an example of Natural Language Processing (NLP)?"
choice8[1] = " Facial recognition in photos"
choice8[2] = " Speech-to-text transcription"
choice8[3] = " Predicting stock prices"
choice8[4] = " Detecting objects in videos"

/* ====== Correct Answers ====== */
solution[1] = "b" // Artificial Intelligence
solution[2] = "b" // John McCarthy
solution[3] = "c" // Spam email filtering
solution[4] = "c" // Transformer
solution[5] = "b" // Deep neural networks
solution[6] = "b" // DeepMind
solution[7] = "b" // Bias / job replacement concern
solution[8] = "b" // Speech-to-text (NLP)
