import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justifyContent: center;
    background: #fff;
    border: 0.5px solid #d3d3d3;
    border-left: none;
    border-right: none;
    border-top: none;
    padding: 20px;
    width: 500px;
`;

export const ProfilePicture = styled.img`
  width: 27px;
  height: 27px;
  border-radius: 50%;
`;

export const ForkImg = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 10px;
`;

export const NameInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const AvatarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const StarsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Name = styled.div`
    font-size: 12px;
    margin-left: 5px;
    color: #1C60E6;
`;

export const CustomURL = styled.a`
    font-size: 11px;
    margin-left: 5px;
    display: flex;
    align-items: center;
    color: #1C60E6;
    text-decoration: none;
`;

export const DatesContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
`

export const CustomDate = styled.div`
    font-size: 10px;
    margin-left: 5px;
    color: #5a5a5a;
`;

export const Description = styled.div`
    font-size: 13px;
    margin-left: 5px;
    margin-top: 15px;
    color: #5a5a5a;
`;

export const FilesContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;

export const File = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const FileImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 10px;
`;

export const Message = styled.div`
    display: flex;
    alignSelf: center;
    font-size: 15px;
    font-weight: bold;
    color: #5a5a5a;
`