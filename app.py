from flask import Flask, render_template, request
import openai

app = Flask(__name__)

# Set OpenAI API key
openai_api_key = 'v8RdtZgDbtrka00URLQOT3BlbkFJ4JAmvpK2jLbDq55bI7j5'
openai.api_key = openai_api_key

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/find_gift', methods=['POST'])
def find_gift():
    prompt = request.form['prompt']
    if not prompt:
        return render_template('index.html', message='Please enter a prompt to find gift ideas.')

    try:
        # Making API request to generate gift suggestions
        response = openai.Completion.create(
            engine='text-davinci-003',
            prompt=f'Generate gift ideas for {prompt}',
            max_tokens=100
        )

        generated_text = response.choices[0].text.strip()
        gift_suggestions = generated_text.split('\n')

        return render_template('index.html', gift_suggestions=gift_suggestions)
    except Exception as e:
        print(f'Error generating gift suggestions: {e}')
        return render_template('index.html', message='An error occurred while generating gift suggestions. Please try again later.')

if __name__ == '__main__':
    app.run(debug=True)
