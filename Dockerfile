FROM vimal13/tomcat8:latest

COPY target/demo-student-liberary3-0.0.1-SNAPSHOT.war  /opt/tomcat/webapps
