import axios from "axios";
import React, { useState, useEffect, useRef, useContext } from "react";
import UserContext from "../../context/userIdProvider";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Image, Alert } from "react-native";
import { If, Else, Then } from "react-if";
import { getUsersList } from "../../actions";
import { showToast } from "../../utils";
import { Header, Footer, HeaderText, Container, UsersList, NoContent, CardButton, CardButtons, ButtonText, CardContainer, CardImageView, CardImage, InfoCard, InfoCardTitle } from "./Listing.styles";
interface Props {
    route: any,
    navigation: any
}
type ResponseData = {
    id: string
    title: string,
    firstName: string,
    lastName: string,
    picture: string
}
type Response = {
    data: ResponseData[],
    total: string,
    page: string,
    limit: string
}

const Listing: React.FC<Props> = ({ route, navigation }) => {
    const userContext = useContext(UserContext);
    const [employeeList, setEmployeeList] = useState<ResponseData[]>([]);
    const [page, setPage] = useState<number>(0);
    const [selected,setSelected] = useState<boolean>(false) ; 
    const flatListRef = useRef<any>();
    useEffect(() => {
        getUsers();
    }, [page]);
    
    const getUsers = async () => {
        try {
            let response = await getUsersList(page);
            setEmployeeList(response);
            flatListRef.current.scrollToIndex({ index: 0 });
        }
        catch (err) {
            showToast("Error while fetching users")
        }
    }


    const renderItem = ({ item }: { item: ResponseData }): JSX.Element => {
        return (
            <CardContainer>
                <CardImageView>
                    <CardImage source={{ uri: item.picture }} />
                </CardImageView>
                <InfoCard>
                    <InfoCardTitle>{item.title}. {item.firstName} {item.lastName}</InfoCardTitle>
                    <CardButtons>
                        <CardButton activeOpacity={0.7} selected={selected} onPress={() => {
                            setSelected(true)
                            userContext.setUserId(item.id);
                            navigation.navigate("Profile")
                        }} >
                            <ButtonText>View profile</ButtonText>
                        </CardButton>
                        <CardButton selected={selected} onPress={() => {
                            setSelected(true)
                            userContext.setUserId(item.id);
                            navigation.navigate("Blogs")
                        }} ><ButtonText>View posts</ButtonText></CardButton>
                    </CardButtons>
                </InfoCard>
            </CardContainer>
        )

    }

    const ListFooter = (): JSX.Element => (
        <Footer>
            <Button color="olivedrab" title="prev" disabled={page <= 0} onPress={() => setPage(page - 1)} />
            <Text>{page}</Text>
            <Button color="olivedrab" title="next" onPress={() => setPage(page + 1)} />
        </Footer>
    );


    return (
        <Container>
            <Header>
                <HeaderText>Users List</HeaderText>
            </Header>
            <If condition={employeeList.length > 0}>
                <Then>
                    <UsersList>
                        <FlatList ref={flatListRef} data={employeeList} renderItem={renderItem} keyExtractor={item => item.id} ListFooterComponent={ListFooter} />
                    </UsersList>
                </Then>
                <Else>
                    <NoContent>
                        <Text>No content to show</Text>
                    </NoContent>
                </Else>
            </If>
        </Container>
    )
}

export default Listing;
