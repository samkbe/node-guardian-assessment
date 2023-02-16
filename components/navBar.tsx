import styled from 'styled-components';
import Image from 'next/image';
import logo from '../public/ng_logo_white_logo-in-text.svg';

const NavBarWrapper = styled.div`
	height: 10vh;
	width: 100vw;
	display: flex;
	padding: 15px;
`;

export function NavBar() {
	return (
		<NavBarWrapper>
			<Image src={logo} alt='Node Guardians Logo' />
		</NavBarWrapper>
	);
}
