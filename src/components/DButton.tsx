import { Button } from "@chakra-ui/react"
import { MouseEventHandler } from "react"

interface IDButton {
    onClick: MouseEventHandler
}

export const DButton = ({ onClick }: IDButton) => {
    return(
        <Button
          onClick={onClick}
          colorScheme="teal"
          size="sm"
          width="100%"
          height="40px"
          marginTop="5px"
        >
          Entrar
        </Button>
    )
}

export default DButton



