import {
        HeroContainer,
        PreName,
        PreNameMobile,
        PreWrapper,
} from '../styles/Banner.styled';
import { Cmd, Link } from '../styles/Output.styled';

const Banner: React.FC = () => {
        return (
                <HeroContainer data-testid="banner">
                        <div className="info-section">
                                <PreName>
                                        {`        
                   888
                   888
                   888
 .d88b.  888  888 888888  .d88b.  88888b.
 d8P  Y8b 'Y8bd8P' 888    d88""88b 888 "88b
 88888888   X88K   888    888  888 888  888
 Y8b.     .d8""8b. Y88b.  Y88..88P 888  888
 "Y8888  888  888  "Y888  "Y88P"  888  888"
          `}
                                </PreName>
                                <PreWrapper>
                                        <PreNameMobile>
                                                {`
                   888
                   888
                   888
 .d88b.  888  888 888888  .d88b.  88888b.
 d8P  Y8b 'Y8bd8P' 888    d88""88b 888 "88b
 88888888   X88K   888    888  888 888  888
 Y8b.     .d8""8b. Y88b.  Y88..88P 888  888
 "Y8888  888  888  "Y888  "Y88P"  888  888"
          `}
                                        </PreNameMobile>
                                </PreWrapper>
                                {/* <div>What did you think the 'e' stood for?</div> */}
                                <div>
                                        This project's source code can be found
                                        in it's{' '}
                                        <Link
                                                href="https://github.com/andrewelawrence/andrewelawrence.github.io"
                                                target="_blank"
                                        >
                                                GitHub repo
                                        </Link>
                                        .
                                </div>
                                <div>
                                        Type `<Cmd>help</Cmd>` for a list of
                                        available commands.
                                </div>
                        </div>
                </HeroContainer>
        );
};

export default Banner;
