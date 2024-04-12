# MyBit Application

MyBit is an application designed to facilitate the connection between donors and recipients, providing a platform where donors can contribute to various causes while organizations can request specific donations they require.

## Technology Stack

- **Frontend**: Developed using React for the user interface.
- **UI Design**: Utilized Figma for designing the user interface.
- **Backend**: Implemented with Spring Boot to handle server-side logic.
- **Database**: Utilized MongoDB as the database to store application data.

## User Roles and Functionality

### Donors
- Register as a donor by providing basic personal information.
- Choice to donate food, clothes, or cash.
- Access to view their donation history.
- Ability to update their profile.

### NGOs (Non-Governmental Organizations)
- Register by providing basic details along with a registration number.
- Can request specific donations they need.
- Staff can collect donations and report back.
- No option for donors to specify a particular NGO for donation.

### Administrators
- Access to approve donations.
- Manage KYC (Know Your Customer) information of recipients.
- Update their profile as needed.

## Development Contributions

In the development of this project, focus was placed on the backend development utilizing Spring Boot. The backend was responsible for implementing functionalities such as Spring Security and JWT authentication to ensure secure access to the application.

### Why Spring?

The choice of Spring Boot for the backend development was based on several factors:

1. **Scalability and Performance**: Spring Boot offers scalability and performance characteristics suitable for handling a variety of requests in a production environment.
   
2. **Existing Expertise**: The development team possessed proficiency in Java and Spring, making it efficient to leverage Spring Boot for backend development.

3. **Ecosystem and Community Support**: Spring Boot has a strong ecosystem and active community support, providing a wide range of libraries, tools, and resources for development.

4. **Security**: Spring Security provides robust security features, essential for handling user authentication and authorization.

5. **Ease of Integration**: Spring Boot integrates seamlessly with other Spring modules and frameworks, simplifying development and ensuring compatibility within the tech stack.

6. **Reliability and Stability**: Spring Boot is known for its reliability and stability, making it a suitable choice for building robust and maintainable backend systems.

7. **Cost Considerations**: Spring Boot is an open-source framework, offering cost-effective solutions for backend development without licensing fees.

Overall, the choice of Spring Boot for the backend development of MyBit application aligns with the project requirements, development team expertise, and considerations for scalability, security, and community support.
