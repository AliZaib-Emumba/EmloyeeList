import styled from "styled-components/native" ; 

export const Container = styled.View({
    paddingTop: 10, justifyContent: "center", alignItems: "center", height: "100%"
})

export const Filter = styled.View({
    margin: 8, flexDirection: "row", alignItems: "center", justifyContent: "flex-start", width: "100%", paddingLeft: 8
})

export const FilterLabel = styled.Text({
    marginRight: 5
})

export const LoadingText = styled.Text({
    fontSize: 32 , 
})

export const BlogCard = styled.View({
    backgroundColor: "white", borderRadius: 12, elevation: '8', padding: 8, alignItems: "center", justifyContent: "center", width: "46%", margin: 8 
})

export const BlogImage = styled.Image({
    height: 150, width: "100%", borderRadius: 5
})

export const BlogDetails = styled.View({
    marginTop: 12 ,
})

