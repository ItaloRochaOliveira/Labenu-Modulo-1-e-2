import {TitleHeader, ImgPerfil, Separate} from './styled'

export const Header = ({
    userInfo
}) => {

    return(
        <TitleHeader>
            <Separate>
            <ImgPerfil src={userInfo.perfilPicture}/>
            {userInfo.userName}
            
            </Separate>
            Insta4
        </TitleHeader>
    )
}