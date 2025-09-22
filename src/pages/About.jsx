import Card from '../Cards/Card'
import ProfileCard from '../Cards/ProfileCard'
import ProfilePic from '../assets/ProfilePic.jpg';
function About()
{
    return(
        <main >
            <ProfileCard
  name="Navanshu Surve"
  title="Student"
  handle="navanshoe"
  status="Online"
  contactText="Instagram"
  avatarUrl={ProfilePic}
  showUserInfo={true}
  enableTilt={true}
  enableMobileTilt={true}
  onContactClick={() => console.log('Contact clicked')}
/>
        </main>
    
        
    )
}
export default About