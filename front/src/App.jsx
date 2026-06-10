import Card from "./components/card/card.jsx"

const profiles = [
  {
    name: "Aarav Sharma",
    profilePic: "https://plus.unsplash.com/premium_vector-1682269287900-d96e9a6c188b?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 28,
    address: "Mumbai, India"
  },
  {
    name: "Priya Patel",
    profilePic: "https://plus.unsplash.com/premium_photo-1682023585957-f191203ab239?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 24,
    address: "Delhi, India"
  },
  {
    name: "Rohan Das",
    profilePic: "https://plus.unsplash.com/premium_photo-1682023586579-e38ca10343e5?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 31,
    address: "Kolkata, India"
  },
  {
    name: "Ananya Iyer",
    profilePic: "https://plus.unsplash.com/premium_photo-1682023585957-f191203ab239?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 26,
    address: "Chennai, India"
  },
  {
    name: "Vikram Reddy",
    profilePic: "https://plus.unsplash.com/premium_photo-1682023585702-ec13baef8dc1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 35,
    address: "Hyderabad, India"
  },
  {
    name: "Meera Nair",
    profilePic: "https://plus.unsplash.com/premium_photo-1682023585957-f191203ab239?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 29,
    address: "Bengaluru, India"
  },
  {
    name: "Kabir Mehta",
    profilePic: "https://plus.unsplash.com/premium_photo-1682023585702-ec13baef8dc1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 27,
    address: "Ahmedabad, India"
  },
  {
    name: "Dia Sen",
    profilePic: "https://plus.unsplash.com/premium_photo-1682023586579-e38ca10343e5?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 23,
    address: "Pune, India"
  },
  {
    name: "Arjun Verma",
    profilePic: "https://plus.unsplash.com/premium_photo-1682023585957-f191203ab239?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 33,
    address: "Jaipur, India"
  },
  {
    name: "Sneha Rao",
    profilePic: "https://plus.unsplash.com/premium_photo-1682023586579-e38ca10343e5?q=80&w=784&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    age: 30,
    address: "Goa, India"
  }
];

export const App = () => {
  return (
  <>
      <div className="card-container">

        {profiles.map((profile, index) => (
          <Card
          key={index}
            user={profile.name}
            img={profile.profilePic}
            age={profile.age}
            address={profile.address}
          />
        ))}

      </div>
    </>
  )
}

export default App
