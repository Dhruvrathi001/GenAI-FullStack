# 4-Layer Structure

```text
src/
├── 1_ui/                 # Layer 1: User Interface
│   ├── components/       # Reusable UI elements (buttons, inputs)
│   └── pages/            # Full view screens (login, dashboard)
│
├── 2_hooks/              # Layer 2: Custom React Hooks
│   └── hooks/            # Manages local state and triggers API calls
│
├── 3_state/              # Layer 3: Global Data Stores
│   ├── auth.context.jsx  # Authentication state container
│   └── ai.context.jsx    # AI features data container
│
└── 4_api/                # Layer 4: Backend Communication
    └── services/
        └── auth.api.js   # Axios/Fetch network requests
```
