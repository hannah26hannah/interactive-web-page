import Component from '../core/Component';

export default class TextSVGAnimation2 extends Component {
  template() {
    return `
    <div class='svgWrapper svgWrapper2'
    >
      <svg id="text-svg-logo" width="886" height="213" viewBox="0 0 886 213" fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="886" height="213" fill="black">
            <rect fill="white" width="886" height="213" />
            <path
                d="M90.625 25.95H181.525V158.7C181.525 162.075 180.175 162.75 177.475 162.975C174.325 162.975 163.975 162.975 152.95 162.75C154.975 166.8 157.225 173.1 157.675 177.15C173.65 177.15 183.325 176.925 189.175 174.45C194.8 171.975 197.05 167.475 197.05 158.925V12H75.1V70.05C75.1 98.625 73.525 138 55.975 165.9C59.575 167.7 66.325 171.975 69.25 174.675C87.7 144.75 90.625 100.875 90.625 70.05V25.95ZM98.95 76.575V88.725H172.975V76.575H141.7V58.575H170.725V46.2H141.7V30.45H127.525V46.2H100.975V58.575H127.525V76.575H98.95ZM151.6 113.475V138.675H118.075V113.475H151.6ZM118.075 150.6H165.1V101.55H104.8V162.3H118.075V150.6ZM55.075 45.75C48.775 34.5 33.925 18.975 20.65 8.40001L7.825 16.95C20.875 27.975 35.275 43.95 41.125 55.2L55.075 45.75ZM49.9 91.425H6.7V107.175H34.375V165.225C24.475 174.675 13.45 184.125 4 191.1L12.775 206.625C23.575 196.725 33.7 187.275 43.15 177.375C57.1 195.15 77.575 203.25 107.275 204.375C132.7 205.275 181.3 204.825 206.725 203.7C207.4 198.975 210.1 191.55 212.125 187.95C184.675 189.75 132.25 190.425 106.825 189.3C80.5 188.175 60.475 180.525 49.9 163.65V91.425Z" />
            <path
                d="M306.85 25.95V44.625H258.25V25.95H306.85ZM258.25 76.8V57H306.85V76.8H258.25ZM322.825 89.625V12.9H241.6V208.875H258.25V89.625H322.825ZM359.05 119.55V140.25H306.175V119.55H359.05ZM306.175 174.675V152.85H359.05V174.675H306.175ZM374.575 187.95V106.5H291.1V199.2H306.175V187.95H374.575ZM358.825 77.025V57H409.225V77.025H358.825ZM409.225 25.95V44.625H358.825V25.95H409.225ZM426.1 12.9H342.85V89.85H409.225V186.375C409.225 190.425 407.875 191.775 404.05 191.775C400 192 386.275 192.225 372.55 191.55C375.025 196.05 377.725 203.925 378.4 208.65C397.075 208.65 409 208.425 416.2 205.725C423.625 202.8 426.1 197.175 426.1 186.6V12.9Z" />
            <path
                d="M585.85 38.1H541.75V49.125H651.325V38.1H602.275V27.3H657.4V15.825H602.275V3.45001H585.85V15.825H534.1V27.3H585.85V38.1ZM549.4 68.025H576.175C574.6 75.9 568.525 78.6 550.525 79.95C552.55 81.75 554.8 85.575 555.475 88.05C577.75 85.575 585.175 80.175 586.75 68.025H601.825V72.975C601.825 83.1 605.2 85.125 618.025 85.125H638.95H641.425V93H549.4V68.025ZM641.425 76.125C640.975 76.8 640.525 76.8 636.925 76.8H618.925C614.2 76.8 613.3 76.35 613.3 72.975V68.025H641.425V76.125ZM535.675 102.675H655.825V58.125H535.675V102.675ZM521.05 11.1H465.7V24.6H521.05V11.1ZM527.35 40.575H455.125V54.3H527.35V40.575ZM507.55 144.525V182.1H477.625V144.525H507.55ZM521.5 130.8H464.125V206.175H477.625V195.6H521.5V130.8ZM464.35 114.15H521.5V100.65H464.35V114.15ZM464.35 84.225H521.5V70.95H464.35V84.225ZM557.275 156.45H634.225V166.575H557.275V156.45ZM557.275 138.675H634.225V148.35H557.275V138.675ZM557.275 120.9H634.225V130.35H557.275V120.9ZM649.75 176.7V110.775H542.2V176.7H569.2C559.3 184.575 539.5 193.575 522.625 198.3C526.225 201 530.95 205.95 533.425 208.875C550.075 203.7 570.55 194.025 583.375 184.575L569.875 176.7H615.1L605.65 184.8C621.4 192.675 639.175 202.35 649.525 208.875L662.8 199.65C651.775 193.35 633.55 184.125 617.35 176.7H649.75Z" />
            <path
                d="M839.425 151.275V165H728.725V151.275H839.425ZM728.725 190.2V175.8H839.425V190.2H728.725ZM712.525 209.325H728.725V201.9H839.425V208.875H856.075V139.8H712.525V209.325ZM790.6 55.2H838.525V68.475H790.6V55.2ZM790.6 30H838.525V42.6H790.6V30ZM790.6 116.85V103.575H867.325V92.1H790.6V79.725H854.95V55.2H882.4V42.6H854.95V18.75H790.6V3H774.175V18.75H707.8V30H774.175V42.6H684.175V55.2H774.175V68.475H705.325V79.725H774.175V92.1H699.025V103.575H774.175V116.85H683.725V129.225H882.625V116.85H790.6Z" />
        </mask>
        <path class="myPath"
            d="M90.625 25.95H181.525V158.7C181.525 162.075 180.175 162.75 177.475 162.975C174.325 162.975 163.975 162.975 152.95 162.75C154.975 166.8 157.225 173.1 157.675 177.15C173.65 177.15 183.325 176.925 189.175 174.45C194.8 171.975 197.05 167.475 197.05 158.925V12H75.1V70.05C75.1 98.625 73.525 138 55.975 165.9C59.575 167.7 66.325 171.975 69.25 174.675C87.7 144.75 90.625 100.875 90.625 70.05V25.95ZM98.95 76.575V88.725H172.975V76.575H141.7V58.575H170.725V46.2H141.7V30.45H127.525V46.2H100.975V58.575H127.525V76.575H98.95ZM151.6 113.475V138.675H118.075V113.475H151.6ZM118.075 150.6H165.1V101.55H104.8V162.3H118.075V150.6ZM55.075 45.75C48.775 34.5 33.925 18.975 20.65 8.40001L7.825 16.95C20.875 27.975 35.275 43.95 41.125 55.2L55.075 45.75ZM49.9 91.425H6.7V107.175H34.375V165.225C24.475 174.675 13.45 184.125 4 191.1L12.775 206.625C23.575 196.725 33.7 187.275 43.15 177.375C57.1 195.15 77.575 203.25 107.275 204.375C132.7 205.275 181.3 204.825 206.725 203.7C207.4 198.975 210.1 191.55 212.125 187.95C184.675 189.75 132.25 190.425 106.825 189.3C80.5 188.175 60.475 180.525 49.9 163.65V91.425Z"
            stroke="white" stroke-width="6" mask="url(#path-1-outside-1)" />
        <path class="myPath"
            d="M306.85 25.95V44.625H258.25V25.95H306.85ZM258.25 76.8V57H306.85V76.8H258.25ZM322.825 89.625V12.9H241.6V208.875H258.25V89.625H322.825ZM359.05 119.55V140.25H306.175V119.55H359.05ZM306.175 174.675V152.85H359.05V174.675H306.175ZM374.575 187.95V106.5H291.1V199.2H306.175V187.95H374.575ZM358.825 77.025V57H409.225V77.025H358.825ZM409.225 25.95V44.625H358.825V25.95H409.225ZM426.1 12.9H342.85V89.85H409.225V186.375C409.225 190.425 407.875 191.775 404.05 191.775C400 192 386.275 192.225 372.55 191.55C375.025 196.05 377.725 203.925 378.4 208.65C397.075 208.65 409 208.425 416.2 205.725C423.625 202.8 426.1 197.175 426.1 186.6V12.9Z"
            stroke="white" stroke-width="6" mask="url(#path-1-outside-1)" />
        <path class="myPath"
            d="M585.85 38.1H541.75V49.125H651.325V38.1H602.275V27.3H657.4V15.825H602.275V3.45001H585.85V15.825H534.1V27.3H585.85V38.1ZM549.4 68.025H576.175C574.6 75.9 568.525 78.6 550.525 79.95C552.55 81.75 554.8 85.575 555.475 88.05C577.75 85.575 585.175 80.175 586.75 68.025H601.825V72.975C601.825 83.1 605.2 85.125 618.025 85.125H638.95H641.425V93H549.4V68.025ZM641.425 76.125C640.975 76.8 640.525 76.8 636.925 76.8H618.925C614.2 76.8 613.3 76.35 613.3 72.975V68.025H641.425V76.125ZM535.675 102.675H655.825V58.125H535.675V102.675ZM521.05 11.1H465.7V24.6H521.05V11.1ZM527.35 40.575H455.125V54.3H527.35V40.575ZM507.55 144.525V182.1H477.625V144.525H507.55ZM521.5 130.8H464.125V206.175H477.625V195.6H521.5V130.8ZM464.35 114.15H521.5V100.65H464.35V114.15ZM464.35 84.225H521.5V70.95H464.35V84.225ZM557.275 156.45H634.225V166.575H557.275V156.45ZM557.275 138.675H634.225V148.35H557.275V138.675ZM557.275 120.9H634.225V130.35H557.275V120.9ZM649.75 176.7V110.775H542.2V176.7H569.2C559.3 184.575 539.5 193.575 522.625 198.3C526.225 201 530.95 205.95 533.425 208.875C550.075 203.7 570.55 194.025 583.375 184.575L569.875 176.7H615.1L605.65 184.8C621.4 192.675 639.175 202.35 649.525 208.875L662.8 199.65C651.775 193.35 633.55 184.125 617.35 176.7H649.75Z"
            stroke="white" stroke-width="6" mask="url(#path-1-outside-1)" />
        <path class="myPath"
            d="M839.425 151.275V165H728.725V151.275H839.425ZM728.725 190.2V175.8H839.425V190.2H728.725ZM712.525 209.325H728.725V201.9H839.425V208.875H856.075V139.8H712.525V209.325ZM790.6 55.2H838.525V68.475H790.6V55.2ZM790.6 30H838.525V42.6H790.6V30ZM790.6 116.85V103.575H867.325V92.1H790.6V79.725H854.95V55.2H882.4V42.6H854.95V18.75H790.6V3H774.175V18.75H707.8V30H774.175V42.6H684.175V55.2H774.175V68.475H705.325V79.725H774.175V92.1H699.025V103.575H774.175V116.85H683.725V129.225H882.625V116.85H790.6Z"
            stroke="white" stroke-width="6" mask="url(#path-1-outside-1)" />
    </svg>
    </div>
    `
  }
}
