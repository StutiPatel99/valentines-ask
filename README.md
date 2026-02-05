💌 valentines-ask
A playful, interactive Valentine’s Day web experience designed to ask that special question — with penguins, cats, gentle chaos, and zero pressure 💕
Built using plain HTML, CSS, and JavaScript, with Supabase used to store date preferences once the Valentine says yes 😌✨

✨ Features

🐧 Animated envelope intro — click to open the love letter

💖 Classic “Yes / No” buttons

The No button tries… but the Yes button always wins 😉

✅ Date activity selection using checkboxes

☁️ Supabase integration to store selected date plans

🎀 Soft, playful UI using custom fonts and subtle animations

🛠️ Tech Stack
- HTML5
- CSS3
- Vanilla JavaScript
- Supabase (Database + JS SDK)
- Google Fonts – The Girl Next Door
📂 Project Structure
valentines-ask/
├── index.html        # Main HTML structure
├── style.css         # Styling and animations
├── script.js         # Interaction logic + Supabase calls
├── assets/           # Images, GIFs (cats, envelope, buttons, etc.)
└── README.md

🚀 How It Works

User clicks the envelope 📨

The Valentine letter opens with a playful question

Clicking No makes the Yes button grow (dramatically 😤)

Clicking Yes reveals date activity options

On confirmation:

- Selected options are saved to Supabase
- A sweet confirmation message appears 💕
- 
🧠 Supabase Setup (Optional)
This project uses Supabase to store selected date ideas.
Table: date_choices
Column Name	Type
id	uuid (PK)
selected_plans	text[]
created_at	timestamp

⚠️ Security Note

The Supabase anon key is currently used on the client side.
For production or public projects, consider:
Row Level Security (RLS)
Environment variables
Backend proxy or Edge Functions
🌐 Live Demo
(https://penguin-valentines.netlify.app/)]

Shared with your Valentine's ask them out in a special way!

