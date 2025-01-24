import { Center, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams, useNavigate } from "react-router-dom"; // para pegar o id
import CardInfo from "../components/CardInfo";
import { useState, useEffect, useContext } from "react";
import { api } from "../api";
import { AppContext } from "../components/AppContext";

interface userData {
    email: string;
    password: number;
    name: string;
    balance: number;
    id: string;
}

const Conta = () => {
    const [userData, setUserData] = useState<null | userData>();
    const { id } = useParams(); //destruturando para pegar o id
    const navigate = useNavigate(); // para navegar para outra pagina

    const {isLoggedIn} = useContext(AppContext)

    !isLoggedIn && navigate('/') // se o usuario nao estiver logado ele volta para a home

    useEffect(() => {
        const getData = async () => {
            const data: any | userData = await api;
            setUserData(data);
        }

        getData();
    }, []);

    const actualData = new Date();

    if (userData && id !== userData.id) { // se o id for diferente do id do usuario logado 
        navigate('/') // volta para a home

    }

    return (

        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={100}>
                {
                    userData === undefined || userData === null ?
                    (
                        <Center>
                            <Spinner size="xl" color="white" />
                        </Center>
                    ) :
                    (
                        <>
                            <CardInfo mainContent={`Bem vinda ${userData?.name}`} content={`${actualData.getDate()} / ${actualData.getMonth()} / ${actualData.getFullYear()} ${actualData.getHours()} :${actualData.getMinutes()}`} />

                            <CardInfo mainContent="Saldo" content={`R$ ${userData.balance}`} />

                        </>

                    )
                }
            </SimpleGrid>
        </Center>

    )
}

export default Conta;