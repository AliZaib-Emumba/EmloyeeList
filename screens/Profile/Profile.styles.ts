import styled from "styled-components/native" ;

export const Container = styled.View({
    justifyContent: "center", alignItems: "center", height: "100%", padding: 16
})

export const LoadingText = styled.Text({
    fontSize: 32,
})

export const UserImageView = styled.View({
    backgroundColor: "white", padding: 16, borderRadius: 12, elevation: '5'
})

export const UserImage = styled.Image({
    width: 200, height: 200, borderRadius: 12
})

export const DetailsCard = styled.View({
    marginVertical: 10, padding: 10, width: "100%", flex: 1, backgroundColor: "white", borderRadius: 12, elevation: '5'  
})

export const DetailsHeading = styled.Text({
    fontSize: 24, color: "dimgray"
})
