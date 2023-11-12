/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.ProjetFinal.CarolineSDianaF.Implementation;

import com.ProjetFinal.CarolineSDianaF.Interface.AdministratorService;
import com.ProjetFinal.CarolineSDianaF.Models.ClinicModel;
import com.ProjetFinal.CarolineSDianaF.Models.DoctorModel;
import com.ProjetFinal.CarolineSDianaF.Models.PatientModel;
import com.ProjetFinal.CarolineSDianaF.Repository.ClinicRepository;
import com.ProjetFinal.CarolineSDianaF.Repository.DoctorRepository;
import com.ProjetFinal.CarolineSDianaF.Repository.PatientRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author Diana
 */
@Service
public class AdministratorServiceImpl implements AdministratorService{

    // Inject repositories for Patient, Doctor, and Clinic
    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private ClinicRepository clinicRepository;

    // Implementation for patient management methods
    @Override
    public PatientModel addPatient(PatientModel patient) {
        return patientRepository.save(patient);
    }

    @Override
    public void removePatient(Long patientId) {
        patientRepository.deleteById(patientId);
    }
    @Override
    public PatientModel updatePatient(PatientModel patient) {
        // Ensure the patient exists before updating
        PatientModel existingPatient = patientRepository.findById(patient.getId())
                .orElseThrow(() -> new EntityNotFoundException("Patient not found"));

        // Update fields and save
        existingPatient.setFirstName(patient.getFirstName());
        existingPatient.setLastName(patient.getLastName());
        existingPatient.setHealthInsuranceNumber(patient.getHealthInsuranceNumber());
        existingPatient.setSequentialNumber(patient.getSequentialNumber());
        existingPatient.setContactDetails(patient.getContactDetails());
        existingPatient.setDateBirth(patient.getDateBirth());
        existingPatient.setGender(patient.getGender());
        existingPatient.setClinics(patient.getClinics());

        return patientRepository.save(existingPatient);
    }

    // Implementation for doctor management methods
    @Override
    public DoctorModel addDoctor(DoctorModel doctor) {
        return doctorRepository.save(doctor);
    }

    @Override
    public void removeDoctor(Long doctorId) {
        doctorRepository.deleteById(doctorId);
    }

    @Override
    public DoctorModel updateDoctor(DoctorModel doctor) {
        // Ensure the doctor exists before updating
        DoctorModel existingDoctor = doctorRepository.findById(doctor.getId())
                .orElseThrow(() -> new EntityNotFoundException("Doctor not found"));

        // Update fields and save
        existingDoctor.setFirstName(doctor.getFirstName());
        existingDoctor.setLastName(doctor.getLastName());
        existingDoctor.setSpeciality(doctor.getSpeciality());
        existingDoctor.setProfessionalNumber(doctor.getProfessionalNumber());
        existingDoctor.setExpectedSalary(doctor.getExpectedSalary());
        existingDoctor.setCoordinate(doctor.getCoordinate());
        existingDoctor.setLocation(doctor.getLocation());
        existingDoctor.setContactDetails(doctor.getContactDetails());
        existingDoctor.setClinics(doctor.getClinics());

        return doctorRepository.save(existingDoctor);
    }

    // Implementation for clinic management methods
    @Override
    public ClinicModel addClinic(ClinicModel clinic) {
        return clinicRepository.save(clinic);
    }

    @Override
    public void removeClinic(Long clinicId) {
        clinicRepository.deleteById(clinicId);
    }

    @Override
    public ClinicModel updateClinic(ClinicModel clinic) {
        // Ensure the clinic exists before updating
        ClinicModel existingClinic = clinicRepository.findById(clinic.getId())
                .orElseThrow(() -> new EntityNotFoundException("Clinic not found"));
        // Update fields and save
        existingClinic.setName(clinic.getName());
        existingClinic.setCoordinate(clinic.getCoordinate());
        existingClinic.setServices(clinic.getServices());
        existingClinic.setContactDetails(clinic.getContactDetails());

        return clinicRepository.save(existingClinic);
    }
}
