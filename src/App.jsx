import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import { AuthProvider } from './utils/AuthContext'
import { ToastProviderComponent } from './components/ui/use-toast'
import { SpeechProvider } from './Avatar'
import PrivateRoute from './PrivateRoute'
import './App.css'

// Loading component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="text-center p-4">
          <h2 className="text-xl font-bold text-red-600">Something went wrong.</h2>
          <button 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Lazy load components
const Landing = React.lazy(() => import('./Landing'))
const SignUp = React.lazy(() => import('./SignUp'))
const LoginPage = React.lazy(() => import('./LoginPage'))
const HomePage = React.lazy(() => import('./HomePage'))
const LessonPage = React.lazy(() => import('./LessonPage'))
const FlippedCard = React.lazy(() => import('./FlippedCard'))

// Lazy load game components
const GamesDashboard = React.lazy(() => import('./components/Games/GamesDashboard'))
const FillInTheBlanks = React.lazy(() => import('./components/Games/FillInTheBlanks'))
const Frog = React.lazy(() => import('./components/Games/Frog'))
const Game = React.lazy(() => import('./components/Games/Match'))
const GuessTheEmoji = React.lazy(() => import('./components/Games/Noun'))
const RangoliGame = React.lazy(() => import('./components/Games/Rangoli'))
const Sentence = React.lazy(() => import('./components/Games/Sentence'))
const DrawingCanvas = React.lazy(() => import('./components/Games/Canvas'))

// Lazy load story components
const StoryDashboard = React.lazy(() => import('./components/Stories/StoryDashboard'))
const GolcondaFortStory = React.lazy(() => import('./components/Stories/GolcondaFortStory'))
const CharminarStory = React.lazy(() => import('./components/Stories/Charminar'))
const MahaKumbh = React.lazy(() => import('./components/Stories/MahaKumbh'))
const Cleanliness = React.lazy(() => import('./components/Stories/Cleanliness'))

// Lazy load learning components
const LearningDashboard = React.lazy(() => import('./components/Learnings/LearningDashboard'))
const HabitGame1 = React.lazy(() => import('./components/Learnings/Animation1'))
const HabitGame2 = React.lazy(() => import('./components/Learnings/Animation2'))
const HabitGame3 = React.lazy(() => import('./components/Learnings/Animation3'))
const HabitGame4 = React.lazy(() => import('./components/Learnings/Animation4'))
const HabitGame5 = React.lazy(() => import('./components/Learnings/Animation5'))
const HabitGame6 = React.lazy(() => import('./components/Learnings/Animation6'))

// Lazy load other components
const ARDetection = React.lazy(() => import('./components/AR/ARDetection'))
const GoogleTranslate = React.lazy(() => import('./components/GoogleTranslate'))
const CollapsibleReadAloudButton = React.lazy(() => import('./components/ReadAloudButton'))

function App() {
  return (
    <AuthProvider>
      <ToastProviderComponent>
        <Router>
          <SpeechProvider>
            <div className='App'>
              <NavigationBar />
              <ErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<LoginPage />} />

                    {/* Protected routes */}
                    <Route path="/home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
                    <Route path="/lesson/:levelId" element={<PrivateRoute><LessonPage /></PrivateRoute>} />
                    
                    {/* Games routes */}
                    <Route path="/games" element={<PrivateRoute><GamesDashboard /></PrivateRoute>} />
                    <Route path="/flippedcard" element={<PrivateRoute><FlippedCard /></PrivateRoute>} />
                    <Route path="/fillintheblanks" element={<PrivateRoute><FillInTheBlanks /></PrivateRoute>} />
                    <Route path="/frog" element={<PrivateRoute><Frog /></PrivateRoute>} />
                    <Route path="/match" element={<PrivateRoute><Game /></PrivateRoute>} />
                    <Route path="/canvas" element={<PrivateRoute><DrawingCanvas /></PrivateRoute>} />
                    <Route path="/sentence" element={<PrivateRoute><Sentence /></PrivateRoute>} />
                    <Route path="/noun" element={<PrivateRoute><GuessTheEmoji /></PrivateRoute>} />
                    <Route path="/rangoli" element={<PrivateRoute><RangoliGame /></PrivateRoute>} />
                    
                    {/* Stories routes */}
                    <Route path="/stories" element={<PrivateRoute><StoryDashboard /></PrivateRoute>} />
                    <Route path="/golconda" element={<PrivateRoute><GolcondaFortStory /></PrivateRoute>} />
                    <Route path="/cleanliness" element={<PrivateRoute><Cleanliness /></PrivateRoute>} />
                    <Route path="/mahakumbh" element={<PrivateRoute><MahaKumbh /></PrivateRoute>} />
                    <Route path="/charminar" element={<PrivateRoute><CharminarStory /></PrivateRoute>} />
                    
                    {/* Learning routes */}
                    <Route path="/learnings" element={<PrivateRoute><LearningDashboard /></PrivateRoute>} />
                    <Route path="/habit1" element={<PrivateRoute><HabitGame1 /></PrivateRoute>} />
                    <Route path="/habit2" element={<PrivateRoute><HabitGame2 /></PrivateRoute>} />
                    <Route path="/habit3" element={<PrivateRoute><HabitGame3 /></PrivateRoute>} />
                    <Route path="/habit4" element={<PrivateRoute><HabitGame4 /></PrivateRoute>} />
                    <Route path="/habit5" element={<PrivateRoute><HabitGame5 /></PrivateRoute>} />
                    <Route path="/habit6" element={<PrivateRoute><HabitGame6 /></PrivateRoute>} />
                    
                    {/* AR route */}
                    <Route path="/ar" element={<PrivateRoute><ARDetection /></PrivateRoute>} />
                  </Routes>
                </Suspense>
              </ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <GoogleTranslate />
                <CollapsibleReadAloudButton />
              </Suspense>
            </div>
          </SpeechProvider>
        </Router>
      </ToastProviderComponent>
    </AuthProvider>
  )
}

export default App```javascript
// Lazy load components
const Landing = React.lazy(() => import('./Landing'))
const SignUp = React.lazy(() => import('./SignUp'))
const LoginPage = React.lazy(() => import('./LoginPage'))
const HomePage = React.lazy(() => import('./HomePage'))
const LessonPage = React.lazy(() => import('./LessonPage'))
const FlippedCard = React.lazy(() => import('./FlippedCard'))

// Lazy load game components
const GamesDashboard = React.lazy(() => import('./components/Games/GamesDashboard'))
const FillInTheBlanks = React.lazy(() => import('./components/Games/FillInTheBlanks'))
const Frog = React.lazy(() => import('./components/Games/Frog'))
const Game = React.lazy(() => import('./components/Games/Match'))
const GuessTheEmoji = React.lazy(() => import('./components/Games/Noun'))
const RangoliGame = React.lazy(() => import('./components/Games/Rangoli'))
const Sentence = React.lazy(() => import('./components/Games/Sentence'))
const DrawingCanvas = React.lazy(() => import('./components/Games/Canvas'))

// Lazy load story components
const StoryDashboard = React.lazy(() => import('./components/Stories/StoryDashboard'))
const GolcondaFortStory = React.lazy(() => import('./components/Stories/GolcondaFortStory'))
const CharminarStory = React.lazy(() => import('./components/Stories/Charminar'))
const MahaKumbh = React.lazy(() => import('./components/Stories/MahaKumbh'))
const Cleanliness = React.lazy(() => import('./components/Stories/Cleanliness'))

// Lazy load learning components
const LearningDashboard = React.lazy(() => import('./components/Learnings/LearningDashboard'))
const HabitGame1 = React.lazy(() => import('./components/Learnings/Animation1'))
const HabitGame2 = React.lazy(() => import('./components/Learnings/Animation2'))
const HabitGame3 = React.lazy(() => import('./components/Learnings/Animation3'))
const HabitGame4 = React.lazy(() => import('./components/Learnings/Animation4'))
const HabitGame5 = React.lazy(() => import('./components/Learnings/Animation5'))
const HabitGame6 = React.lazy(() => import('./components/Learnings/Animation6'))

// Lazy load other components
const ARDetection = React.lazy(() => import('./components/AR/ARDetection'))
const GoogleTranslate = React.lazy(() => import('./components/GoogleTranslate'))
const CollapsibleReadAloudButton = React.lazy(() => import('./components/ReadAloudButton'))

const routes = [
  { path: "/", element: <Landing /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/home", element: <PrivateRoute><HomePage /></PrivateRoute> },
  { path: "/lesson/:levelId", element: <PrivateRoute><LessonPage /></PrivateRoute> },
  { path: "/games", element: <PrivateRoute><GamesDashboard /></PrivateRoute> },
  { path: "/flippedcard", element: <PrivateRoute><FlippedCard /></PrivateRoute> },
  { path: "/fillintheblanks", element: <PrivateRoute><FillInTheBlanks /></PrivateRoute> },
  { path: "/frog", element: <PrivateRoute><Frog /></PrivateRoute> },
  { path: "/match", element: <PrivateRoute><Game /></PrivateRoute> },
  { path: "/canvas", element: <PrivateRoute><DrawingCanvas /></PrivateRoute> },
  { path: "/sentence", element: <PrivateRoute><Sentence /></PrivateRoute> },
  { path: "/noun", element: <PrivateRoute><GuessTheEmoji /></PrivateRoute> },
  { path: "/rangoli", element: <PrivateRoute><RangoliGame /></PrivateRoute> },
  { path: "/stories", element: <PrivateRoute><StoryDashboard /></PrivateRoute> },
  { path: "/golconda", element: <PrivateRoute><GolcondaFortStory /></PrivateRoute> },
  { path: "/cleanliness", element: <PrivateRoute><Cleanliness /></PrivateRoute> },
  { path: "/mahakumbh", element: <PrivateRoute><MahaKumbh /></PrivateRoute> },
  { path: "/charminar", element: <PrivateRoute><CharminarStory /></PrivateRoute> },
  { path: "/learnings", element: <PrivateRoute><LearningDashboard /></PrivateRoute> },
  { path: "/habit1", element: <PrivateRoute><HabitGame1 /></PrivateRoute> },
  { path: "/habit2", element: <PrivateRoute><HabitGame2 /></PrivateRoute> },
  { path: "/habit3", element: <PrivateRoute><HabitGame3 /></PrivateRoute> },
  { path: "/habit4", element: <PrivateRoute><HabitGame4 /></PrivateRoute> },
  { path: "/habit5", element: <PrivateRoute><HabitGame5 /></PrivateRoute> },
  { path: "/habit6", element: <PrivateRoute><HabitGame6 /></PrivateRoute> },
  { path: "/ar", element: <PrivateRoute><ARDetection /></PrivateRoute> },
]

function App() {
  return (
    <AuthProvider>
      <ToastProviderComponent>
        <Router>
          <SpeechProvider>
            <div className='App'>
              <NavigationBar />
              <ErrorBoundary>
                <Suspense fallback={<LoadingFallback />}>
                  <Routes>
                    {routes.map((route, index) => (
                      <Route key={index} path={route.path} element={route.element} />
                    ))}
                  </Routes>
                </Suspense>
              </ErrorBoundary>
              <Suspense fallback={<LoadingFallback />}>
                <GoogleTranslate />
                <CollapsibleReadAloudButton />
              </Suspense>
            </div>
          </SpeechProvider>
        </Router>
      </ToastProviderComponent>
    </AuthProvider>
  )
}

export default App
```