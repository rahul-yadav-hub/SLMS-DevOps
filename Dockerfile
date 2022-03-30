FROM tomcat:latest

COPY target/demo-student-liberary3-0.0.1-SNAPSHOT.war  /usr/local/tomcat/webapps/
