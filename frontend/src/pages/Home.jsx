import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Typography, Button, Box } from "@mui/material";
import { AccessAlarm, CalendarToday, Book, BarChart } from "@mui/icons-material";

const Home = () => {
  return (
    <Box
      sx={{
        padding: "2rem",
        backgroundColor: "#f6f8fa", // GitHub 背景色
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        align="center"
        sx={{
          fontWeight: "bold",
          color: "#333",
          marginBottom: "2rem",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        学习追踪系统
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{
          marginBottom: "2rem",
          color: "#4f5b66",
          fontSize: "1.2rem",
          maxWidth: "600px",
        }}
      >
        记录、管理和分析你的学习活动，让每个学习任务都更有效率。
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* 学习日志 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#fff",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <AccessAlarm sx={{ fontSize: 60, color: "#24292f" }} />
              </Box>
              <Typography variant="h5" component="h2" align="center" sx={{ fontWeight: "bold" }}>
                学习日志
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center" sx={{ marginBottom: "1rem" }}>
                记录你的学习进程，随时回顾并总结每一天的学习。
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                component={Link}
                to="/log"
                sx={{
                  backgroundColor: "#ffffff",
                  borderColor: "#d1d5da",
                  "&:hover": {
                    backgroundColor: "#f6f8fa",
                  },
                }}
              >
                查看日志
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* 学习日程 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#fff",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <CalendarToday sx={{ fontSize: 60, color: "#24292f" }} />
              </Box>
              <Typography variant="h5" component="h2" align="center" sx={{ fontWeight: "bold" }}>
                学习日程
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center" sx={{ marginBottom: "1rem" }}>
                安排和查看你的学习计划，确保每个目标按时完成。
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                component={Link}
                to="/schedule"
                sx={{
                  backgroundColor: "#ffffff",
                  borderColor: "#d1d5da",
                  "&:hover": {
                    backgroundColor: "#f6f8fa",
                  },
                }}
              >
                查看日程
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* 学习笔记 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#fff",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <Book sx={{ fontSize: 60, color: "#24292f" }} />
              </Box>
              <Typography variant="h5" component="h2" align="center" sx={{ fontWeight: "bold" }}>
                学习笔记
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center" sx={{ marginBottom: "1rem" }}>
                管理你的学习笔记，随时查看并添加新的笔记。
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                component={Link}
                to="/notes"
                sx={{
                  backgroundColor: "#ffffff",
                  borderColor: "#d1d5da",
                  "&:hover": {
                    backgroundColor: "#f6f8fa",
                  },
                }}
              >
                查看笔记
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* 学习数据可视化 */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            sx={{
              boxShadow: 3,
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#fff",
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
                <BarChart sx={{ fontSize: 60, color: "#24292f" }} />
              </Box>
              <Typography variant="h5" component="h2" align="center" sx={{ fontWeight: "bold" }}>
                学习数据可视化
              </Typography>
              <Typography variant="body2" color="textSecondary" align="center" sx={{ marginBottom: "1rem" }}>
                查看你学习的进度和统计数据，以图表形式展示你的成果。
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                component={Link}
                to="/dashboard"
                sx={{
                  backgroundColor: "#ffffff",
                  borderColor: "#d1d5da",
                  "&:hover": {
                    backgroundColor: "#f6f8fa",
                  },
                }}
              >
                查看数据
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
