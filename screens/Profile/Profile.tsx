import React , {useState , useEffect, useContext} from "react" ; 
import UserContext from "../../context/userIdProvider" ; 
import {Text} from "react-native" ; 
import {getUserDetail} from "../../actions" ;
import { If, Else, Then } from "react-if";
import {formatDate} from "../../utils" ;
import {showToast} from "../../utils" ; 
import {Container,LoadingText,UserImageView,UserImage,DetailsCard,DetailsHeading} from "./Profile.styles" ; 
interface Props {
    route: any,
    navigation: any
}
type Location = {
    street:string,
    city:string,
    state:string,
    country:string,
    timezone:string
}

type Response = {
    id:string,
    title:string,
    firstName:string,
    lastName:string,
    picture:string,
    gender:string,
    email:string,
    dateOfBirth:string,
    phone:string,
    location:Location ,
    registerDate:string,
    updatedDate:string
}
const Profile: React.FC<Props> = ({route,navigation}) => {
    const [userDetail , setUserDetail] = useState<Response | undefined>() ; 
    const userContext = useContext(UserContext) ; 
    const userId:string = userContext.userId ; 
    useEffect(()=>{
        console.log("User context is here" , userContext.userId) 
            getUserDetail(userId)
            .then(res => setUserDetail(res)) 
            .catch(err => showToast("Error while fething user details"))
    },[]) ;
    console.log("userDetail value" + userDetail)
    return (
        <If condition={!!userDetail}>
            <Then>
                <Container>
                    <UserImageView>
                        <UserImage source={{ uri: userDetail?.picture }} />
                    </UserImageView>
                    <DetailsCard>
                        <DetailsHeading>Details</DetailsHeading>
                        <Text>Name: {userDetail?.firstName + " " + userDetail?.lastName}</Text>
                        <Text>DOB: {formatDate(userDetail?.dateOfBirth)}</Text>
                        <Text>Gender: {userDetail?.gender}</Text>
                        <Text>Email: {userDetail?.email}</Text>
                        <Text>Registration Date: {formatDate(userDetail?.registerDate)}</Text>
                        <Text>Phone: {userDetail?.phone}</Text>
                    </DetailsCard>
                </Container>
            </Then>
            <Else>
                <Container>
                    <LoadingText>Loading...</LoadingText>
                </Container>
            </Else>
        </If>

    )
}

export default Profile ; 
