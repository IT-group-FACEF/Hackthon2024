import { Layout } from "antd";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Pizza from "../../Charts/AdmData";
import Line from "../../Charts/UserData";
import Card from "../../components/Card";

const DashboardCompany = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar title={"Dashboard"} />
      <Layout>
        <Sidebar />
        <Layout style={{ display: "flex" }}>
          <Layout
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <div
              style={{
                flex: 1,
                minHeight: "300px",
                maxWidth: "500px",
                padding: "0 10px",
              }}
            >
              <Pizza />
            </div>
            <div
              style={{
                flex: 1,
                minHeight: "300px",
                maxWidth: "700px",
                padding: "0 10px",
              }}
            >
              <Line />
            </div>
          </Layout>
          <Layout
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Card
              title={"Metas de Saúde e Programas de Incentivo"}
              value={[
                "Aumentar a atividade física diariamente.",
                "Melhorar a alimentação com mais frutas e vegetais.",
                "Beber pelo menos 2 litros de água por dia.",
                "Praticar meditação para reduzir o estresse.",
                "Dormir de 7 a 8 horas por noite.",
              ]}
            />
            <Card
              title={"Metas de Saúde e Programas de Incentivo"}
              value={[
                "Participar de exames de saúde regulares.",
                "Evitar o consumo excessivo de açúcar.",
                "Promover a saúde mental através de atividades sociais.",
              ]}
            />
            <Card
              title={"Metas de Saúde e Programas de Incentivo"}
              value={[
                "Fazer caminhadas de 30 minutos diariamente.",
                "Reduzir o consumo de alimentos processados.",
                "Realizar check-ups anuais.",
              ]}
            />
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardCompany;
