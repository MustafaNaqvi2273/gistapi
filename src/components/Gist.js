import React from "react";
import { Card, ProfilePicture, NameInfoContainer, AvatarContainer, 
    StarsContainer, Name, CustomURL, DatesContainer, CustomDate, Description, 
    FilesContainer, File, ForkImg, FileImg } from "./styles";
import moment from "moment";
import StarIcon from '@mui/icons-material/Star';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import CodeIcon from '@mui/icons-material/Code';
import PropTypes from 'prop-types';

const iconStyle = {
    height: '15px',
    width: '15px',
    marginLeft: '10px'
}

const Gist = ({ gist }) => {
    return (
        <div>
            <Card>
                <NameInfoContainer>
                    <AvatarContainer>
                        <ProfilePicture src={gist.owner.avatar_url} alt="avatar"/>
                        <Name>{gist.owner.login}</Name>
                    </AvatarContainer>

                    <StarsContainer>
                        <CustomURL href={gist.html_url}><CodeIcon color="#1C60E6" style={iconStyle}/>{Object.keys(gist.files).length} Files</CustomURL>
                        <CustomURL href={gist.forks_url}><ForkImg src="/fork.svg" alt="fork" />Forks</CustomURL>
                        <CustomURL href={gist.comments_url}><ChatBubbleOutlineIcon color="#1C60E6" style={iconStyle}/>Comments</CustomURL>
                        <CustomURL href={gist.owner.starred_url}><StarIcon color="#1C60E6" style={iconStyle}/> Stars</CustomURL>
                    </StarsContainer>   
                </NameInfoContainer>

                <DatesContainer>
                    <CustomDate>Created at: {moment(Date(gist.created_at)).format('MM/DD/YYYY')}</CustomDate>
                    <CustomDate>Updated at: {moment(Date(gist.updated_at)).format('MM/DD/YYYY')}</CustomDate>
                </DatesContainer>

                <Description>{gist.description}</Description>
                <FilesContainer>
                    {Object.keys(gist.files).map((fileName) => (
                        <File>
                            <FileImg src="/file.svg" alt="file"/>
                            <CustomURL href={gist.files[fileName].raw_url}>{fileName}</CustomURL>
                        </File>
                    ))}
                </FilesContainer>
            </Card>
        </div>
    )
}

Gist.propTypes = {
    gist: PropTypes.object
}

export default Gist;
