import NavBar from "../components/NavBar"
import styled from "styled-components"
import profilePic from "../components/images/profile.png"
import discIcon from "../components/images/disc-icon.png"

const Profile = ({user, setUser, cookies, setUserDisplay, setCookie, userDisplay}) => {
    return (
        <>
            <NavBar 
                user={user} 
                setUser={setUser} 
                cookies={cookies} 
                setCookie={setCookie}
                userDisplay={userDisplay} 
                setUserDisplay={setUserDisplay}
            />
            {
                user
                &&
                <ProfileCont>
                    <ProfilePicCont>
                        <Img src={profilePic}/>
                    </ProfilePicCont>
                    <Content>
                        <FirstRow>
                            <h3>{user.username}</h3>
                            <EditProfileButton>
                                Edit Profile
                            </EditProfileButton>
                            <DiscIcon>
                                <Img src={discIcon}/>
                            </DiscIcon>
                        </FirstRow>
                        <SecondRow>
                            <p>0 posts</p>
                            <p>0 followers</p>
                            <p>{user && user.friends.length} following</p>
                        </SecondRow>
                        <ThridRow>
                            <p>{user.username}</p>
                        </ThridRow>
                    </Content>
                </ProfileCont>
            }
        </>
    )
}

export default Profile

const ProfileCont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    font-size: medium;
    font-weight: 500;
    margin-top: 2rem;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 1rem;
    }
`
const ProfilePicCont = styled.div`
    height: 170px;
    width: 170px;
`
const Img = styled.img`
    width: 100%;
`
const Content = styled.div`
display: flex;
flex-direction: column;
gap: 1.5rem;
`
const FirstRow = styled.div`
display: flex;
justify-content: space-between;
`
const SecondRow = styled.div`
display: flex;
justify-content: space-between;
gap: 1rem;
`
const ThridRow = styled.div`
display: flex;
justify-content: space-between;
`
const EditProfileButton = styled.div`
    border: solid 1px rgba(1,1,1,0.2);
    border-radius: 5px;
    padding: 5px 7px 0 7px;
`
const DiscIcon = styled.div`
    height: 30px;
    width: 30px;
`