import { SwapWidget } from '@uniswap/widgets'
import '@uniswap/widgets/fonts.css'

export default function Swap(){
    return(
        <div className="uniswap">
            <SwapWidget
      width={"20em"} // Custom width in pixels
    />

        </div>
    )
}