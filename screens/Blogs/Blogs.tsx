import React , {useEffect , useState , useContext} from "react" ; 
import User from "../../context/userIdProvider";
import {View,Text, StyleSheet, Image , FlatList , Button} from "react-native" ; 
import {getUserPosts} from "../../actions" ;
import {formatDate} from "../../utils" ; 
import {If , Then , Else} from "react-if" ; 
import {showToast} from "../../utils" ; 
import Ionicons from "react-native-vector-icons/Ionicons" ; 
import {Container , Filter , FilterLabel , LoadingText , BlogCard,BlogImage,BlogDetails} from "./Blogs.styles" ;
interface Props{
    route:any,
    navigation:any
}

type UserPostData = {
    id:string ,
    image:string,
    likes:string,
    tags: string[],
    text:string,
    publishDate:string,
    owner: {
        id:string,
        title:string,
        firstName:string,
        lastName:string,
        picture:string,
    }
}

const Blogs: React.FC<Props> = ({route,navigation}) => {
    const [blogs, setBlogs] = useState<UserPostData[]|[]>([]);
    const [active, setActive] = useState<boolean>(false);
    const userContext = useContext(User) ; 
    const userId:string = userContext.userId ; 

    useEffect(()=>{
            getUserPosts(userId)
            .then(res => setBlogs(res))
            .catch(err => showToast("Error while fetching user posts"))
    },[])

    const sortByDate = (data:UserPostData[]):void => {
        if (!active) {
            setActive(true);
            setBlogs(data.sort(function (a:UserPostData, b:UserPostData) {
                return +new Date(a.publishDate) - +new Date(b.publishDate);
            }))
        }
        else {
            setActive(false);
            setBlogs(data.sort(function (a, b) {
                return +new Date(b.publishDate) - +new Date(a.publishDate);
            }))
        }
    }

    const renderItem = ({ item } : {item : UserPostData}): JSX.Element => {
        return (
            <BlogCard>
                <BlogImage source={{ uri: item.image }} />
                <BlogDetails>
                    <Text>{item.text}</Text>
                    <Text>Owner : {item.owner.firstName}</Text>
                    <Text> <Ionicons name={"thumbs-up-outline"} color={"green"}/> {item.likes}</Text>
                    <Text>Published at : {formatDate(item.publishDate)} </Text>
                </BlogDetails>
            </BlogCard>
        )
    }
return(
    <If condition={blogs.length > 0} >
            <Then>
                <Container>
                    <Filter>
                        <FilterLabel>Filter items by: </FilterLabel>
                        <Button onPress={() => sortByDate(blogs)} title="Publish time" color={active ? "olivedrab" : "lightgray"} />
                    </Filter>
                    <FlatList numColumns={2} renderItem={renderItem} data={blogs} />
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

export default Blogs ;

const styles = StyleSheet.create({
    container: { paddingTop: 10, justifyContent: "center", alignItems: "center", height: "100%" },
    filterView: { margin: 8, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", paddingLeft: 8 },
    filterViewText: { marginRight: 5 },
    loadingText: { fontSize: 32 },
    blogCard: { backgroundColor: "white", borderRadius: 12, elevation: 8, padding: 8, alignItems: "center", justifyContent: "center", width: "46%", margin: 8 },
    blogImage: { height: 150, width: "100%", borderRadius: 5 },
    blogDetails: { marginTop: 12 },
})