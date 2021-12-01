import styled from "styled-components/native" ;

export const Header = styled.View({
    flexDirection: "row", justifyContent: "space-evenly", width: "100%", paddingVertical: 10
})

export const HeaderText = styled.Text({
    fontSize :28 ,
    fontWeight: "bold",
})

export const Container = styled.View({
    paddingHorizontal: 4, paddingVertical: 8, alignItems: "center", height: "100%" , width:"100%",
})

export const UsersList = styled.View({
    marginBottom: 50, padding: 16 , width:"100%"
})

export const NoContent = styled.View({
    marginBottom: 50, padding: 16, flex: 1, justifyContent: "center", alignItems: "center"
}) 

interface Props{
    color?: string,
    selected: boolean,
}

export const CardButton = styled.TouchableOpacity<Props>(props => ({
    paddingVertical: 4, paddingHorizontal: 8, 
    backgroundColor: props.selected ? "forestgreen" : "olivedrab", 
    marginRight: 8, borderRadius: 5
}))

export const CardButtons = styled.View({
    flexDirection: "row", paddingTop: 10
})

export const CardContainer = styled.View({
    backgroundColor: "white", marginTop: 20, width: "100%", height: 150, borderRadius: 12, padding: 5 , flexDirection: "row", justifyContent: "flex-start", alignItems: "center" , elevation:'1'
})

export const ButtonText = styled.Text({
    color: "white"
})

export const CardImageView = styled.View({
    width: "25%" 
})

export const CardImage = styled.Image({
    width: 100, height: 100, marginRight: 10, borderRadius: 999, borderColor: "gray", borderWidth: 1
})

export const InfoCard = styled.View({
    justifyContent: "space-between", paddingVertical: 12, paddingLeft: 25, width: "75%" 
})

export const InfoCardTitle = styled.Text({
    color: "dimgray", fontWeight: "800", fontSize: 20
})

export const Footer = styled.View({
    flexDirection: "row", justifyContent: "space-evenly", width: "100%", margin: 10 
})
